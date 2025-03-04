
const gristHost = 'http://localhost:8484';
const apiKey = '3f3ce96c51f8b504036d518ccb459dc81f9c836a';
const docId = '1Jz6p9vHJyjYFwYSX2ssFo';

const res = await fetch('http://localhost:8484/api/docs/1Jz6p9vHJyjYFwYSX2ssFo/tables/Corpus/records', {
  headers: { 'Authorization': 'Bearer 3f3ce96c51f8b504036d518ccb459dc81f9c836a' }
})

export const create = async ({ table, data }) => {
  const res = await fetch(`${gristHost}/api/docs/${docId}/tables/${table}/records`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ records: [{ fields: data }] })
  })
  if (!res.ok)
    return Promise.reject(res.statusText)
  return Promise.resolve()
}

export const read = async ({ table }): Promise<any[]> => {
  const res = await fetch(`${gristHost}/api/docs/${docId}/tables/${table}/records`, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok)
    return Promise.reject(res.statusText)
  return (await res.json()).records.map(i => i.fields)
}
