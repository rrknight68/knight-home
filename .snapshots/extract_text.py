# Extract visible text from an HTML file (scripts/styles removed) for content-loss diffing.
import re, sys, html
s = open(sys.argv[1], encoding='utf-8').read()
s = re.sub(r'data:[a-z]+/[a-z0-9.+-]+;base64,[A-Za-z0-9+/=]+', 'DATAURI', s)
s = re.sub(r'<script\b.*?</script>', ' ', s, flags=re.S|re.I)
s = re.sub(r'<style\b.*?</style>', ' ', s, flags=re.S|re.I)
s = re.sub(r'<!--.*?-->', ' ', s, flags=re.S)
s = re.sub(r'<[^>]+>', '\n', s)
s = html.unescape(s)
lines = [re.sub(r'\s+', ' ', l).strip() for l in s.split('\n')]
print('\n'.join(l for l in lines if l))
