import { getAllRecords, addRecord } from 'src/service/airtable'

export default async (req, res) => {
  if (req.method === 'POST') {
    // ====================================
    // POST
    // ====================================
    try {
      await addRecord(req.body)
      res.status(204).json()
    } catch (error) {
      console.log(error)
      res.status(error.statusCode).json({ message: error.message })
    }
  } else if (req.method === 'GET') {
    // ====================================
    // GET
    // ====================================
    try {
      const vals = await getAllRecords()
      res.status(200).json(vals)
    } catch (error) {
      res.status(error.statusCode).json({ message: error.message })
    }
  } else {
    res.status(404).json({ message: 'unknown endpoint' })
  }

  // ====================================
  // PUT
  // ====================================

  // base('Table 1').update(
  //   [
  //     {
  //       id: 'xyz',
  //       fields: {
  //         Name: 'turtles',
  //         score: '7',
  //       },
  //     },
  //   ],
  //   function (err, records) {
  //     if (err) {
  //       console.error(err)
  //       return
  //     }
  //     records.forEach(function (record) {
  //       console.log(record.get('Name'))
  //     })
  //   }
  // )

  // ====================================
  // DELETE
  // ====================================

  // base('Table 1').destroy(['xyz'], function (err, deletedRecords) {
  //   if (err) {
  //     console.error(err)
  //     return
  //   }
  //   console.log('Deleted', deletedRecords.length, 'records')
  // })
}
