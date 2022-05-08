//
// L21S01 - Simple Database query
//

// Get and display numbers on all incidents
var incGr = new GlideRecord('incident'); // create a new GlideRecord object, we are searching for 'incident'.
// https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/new_to_servicenow/app_store_learnv2_scripting_quebec_gliderecord
// The GlideRecord class is the way to interact with the ServiceNow database from a script
// list of methods of GlideRecord object: https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server/no-namespace/c_GlideRecordScopedAPI

incGr.query(); // https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordQuery_Object_Object
// Runs a query against the table based on the filters specified by query methods such as addQuery() and addEncodedQuery().
// it returns nothing


while (incGr.next()) { // .next():  https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordNext
// Moves to the next record in the GlideRecord object. Returns a boolean :
// true : Move to the next record was successful.
// false: No more records in the result set.
  
  gs.info(incGr.getValue('number')); // .getValue():  https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordGetValue_String
} //                  ^ find the values of a field which is called 'number'. Then return the values as string



//
// L21S02 - Get and display numbers on all incidents v2
//
var incGr = new GlideRecord('incident');
incGr.addQuery('active', true); 
// https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordAddQuery_String_Object
// addQuery(String name, Object value)
// Build a search query and return the rows that match the request. It's like  "where active=true"  in sql

incGr.orderBy('number'); 
// https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordOrderBy_String
// orderBy(String name)
// Specifies an orderBy column. Results are in ascending order.

incGr.setLimit(5);
// https://developer.servicenow.com/dev.do#!/reference/api/sandiego/server/no-namespace/c_GlideRecordScopedAPI#r_ScopedGlideRecordSetLimit_Number
// setLimit(Number maxNumRecords)
// Sets the limit for number of records are fetched by the GlideRecord query.
// we will only see 5 results 

incGr.query(); // execute the query

while (incGr.next()) {
  gs.info(incGr.getValue('number'));
}


//
// L21S03 - What is 'number’?
//
var incGr = new GlideRecord('incident');
incGr.setLimit(1);
incGr.query();

if (incGr.next()) {
  gs.info('dotNumber=' + typeof incGr.getValue('number') + ' gvNumber=' + typeof incGr.number);
}
// result:
// x_803884_test1: dotNumber=string gvNumber=object
// if we want a string, number... use .getValue()


