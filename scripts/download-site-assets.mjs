/**
 * Downloads static images from adrika.co.in into public/assets/images/
 * Uses curl.exe (works in this environment where Node fetch may fail).
 */
import { mkdirSync, readFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const PUBLIC = join(ROOT, 'public')
const BASE = 'https://adrika.co.in'

const EXTRA = ['assets/images/Techco_page_thumbnail.webp', 'assets/images/shapes/bg_pattern_4.svg']

function pathsFromHtml() {
  const htmlPath = join(ROOT, '_homepage.html')
  if (!existsSync(htmlPath)) {
    throw new Error(`Missing ${htmlPath} — run: curl -sL https://adrika.co.in/ -o _homepage.html`)
  }
  const html = readFileSync(htmlPath, 'utf8')
  const re = /assets\/images\/[a-zA-Z0-9_./-]+\.(?:webp|png|jpg|jpeg|svg)/g
  const set = new Set(EXTRA)
  let m
  while ((m = re.exec(html)) !== null) {
    set.add(m[0])
  }
  return [...set].sort()
}

function download(relPath) {
  const url = `${BASE}/${relPath}`
  const outPath = join(PUBLIC, relPath)
  mkdirSync(dirname(outPath), { recursive: true })
  execFileSync('curl.exe', ['-sL', '--fail', url, '-o', outPath], {
    stdio: ['ignore', 'ignore', 'pipe'],
  })
  console.log('OK', relPath)
}

const paths = pathsFromHtml()
console.log('Downloading', paths.length, 'files…')
let failed = 0
for (const p of paths) {
  try {
    download(p)
  } catch (e) {
    console.error('FAIL', p, e.stderr?.toString() || e.message)
    failed++
  }
}
process.exit(failed ? 1 : 0)
