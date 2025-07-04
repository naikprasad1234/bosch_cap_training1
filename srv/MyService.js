const cds = require('@sap/cds');

module.exports = function (srv) {
    //implementation
    srv.on('api', (req, res) => {
        return 'Hello Amigo:, your name is ' + req.data.name;
    });

    const { employees } = cds.entities('prasad.db.master');
    srv.on('READ', 'EmployeeSrv', async (req, res) => {
        // Get data from DB and loop and process , return
        let tx = await cds.tx(req);
        let allrecords = await tx.run(SELECT.from(employees).limit(5));
        const updateRecords = allrecords.map(record => ({
            ...record,     // Extract and Return all fields
            salaryAmount: record.salaryAmount * 0.88 // 12 percent PF
        }));

        return updateRecords;

        //Exmaple 1: hardcoded response
        // return {
        //     "ID": "zkas",
        //     "nameFirst": "Messi"
        // }



    })

}


