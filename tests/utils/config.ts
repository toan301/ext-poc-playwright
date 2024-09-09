import propertiesReader from 'properties-reader';
import path from 'path';

// Load the properties file
const properties = propertiesReader(path.resolve(__dirname, '../resources/testdata.properties'));

// Export the properties so they can be imported by other files
export default properties;