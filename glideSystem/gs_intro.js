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
