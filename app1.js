var sql = require('mssql');
 
 var config = {
    user: 'sa',
    password: 'sa',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance 
    database: 'Company',
    port:1433,
 
    options: {
        encrypt: true // Use this if you're on Windows Azure 
    }
}
 
 
sql.connect(config).then(function() {
    
    console.log('Inf Functions');
    
    // Query 
    
	new sql.Request().query('select * from Department').then(function(recordset) {
        console.log('done ' + recordset);
		console.dir(recordset);
	}).catch(function(err) {
		// ... query error checks 
      console.log(err + " Error ");
	});
 
    // Stored Procedure 
    
    new sql.Request()
	.input('Salary', sql.Int, 50000)
	.execute('GetAllEmployeeBySalary').then(function(recordset) {
		console.dir(recordset);
	}).catch(function(err) {
		// ... execute error checks 
         console.log(err + " Error ");
	});
    
    
}).catch(function(err) {
	console.log(err); 
});


console.log('Done,.....');