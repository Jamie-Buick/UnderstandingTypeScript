// type FileSource = {type: 'file'; path: string };
// const fileSource: FileSource = {
//   type: 'file',
//   path: 'some/path/to/file.csv',
// };

// type DBSource = { type: 'db'; connectionUrl: string };
// const dbSource: DBSource = {
//   type: 'db',
//   connectionUrl: 'some-connection-url',
// };

// type Source = FileSource | DBSource;

// function loadData(source: Source) {
//   // Open + read file OR reach out to database server
//  // if ('path' in source){
//   if (source.type === 'file') {
//    // source.path;
//    // source.path; => open file
//     return;
//   } 
//   // source.connectionUrl; => to reach out to database
// }