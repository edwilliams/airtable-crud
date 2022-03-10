import Airtable from 'airtable'

Airtable.configure({
  endpointUrl: process.env.AIRTABLE_URL,
  apiKey: process.env.AIRTABLE_API
})

const base = Airtable.base(process.env.AIRTABLE_BASE)

export const getAllRecords = () => {
  return new Promise((resolve, reject) => {
    const recs = []

    base(process.env.AIRTABLE_TABLE)
      .select({
        // maxRecords: 3,
        // view: 'Grid view'
      })
      .eachPage(
        (records, fetchNextPage) => {
          const fields = records.map(({ fields }) => fields)
          recs.push(fields)
          fetchNextPage()
        },
        // if there are no more records, `done` will get called.
        err => {
          resolve(recs.flat())
          if (err) {
            return reject(err)
          }
        }
      )
  })
}

export const addRecord = (records = []) => {
  return new Promise((resolve, reject) => {
    const _records = records.map(obj => ({ fields: obj }))
    base(process.env.AIRTABLE_TABLE).create(_records, (err, records) => {
      if (err) {
        return reject(err)
      }
      resolve(records)
    })
  })
}
