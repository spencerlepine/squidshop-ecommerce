/* eslint-disable no-param-reassign */
/*
 *  Mock for `express-cassandra` ORM driver
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *    - Mock the ORM models and CRUD method
 *    - Avoid connectinng to Cassandra database
 *    - Use in-memory storage for test environment
 *     NOTE: this is very hard coded, not great solution
*/
jest.mock('../src/database/models', () => {
  const mockCassandraStorage = {};

  function ProductClass(obj) {
    /*
     *  Mocking the express-cassandra CREATE method
     *  const productToSave = new models.instance.Product(newProduct)
     */
    mockCassandraStorage[obj.id] = obj;

    obj.saveAsync = (id) => new Promise((resolve) => resolve({
      message: 'Successfully added product',
      productId: id,
    }));

    return obj;
  }

  const ProductModelMock = ProductClass;
  // Mock the Read method promise
  ProductModelMock.findOne = (query, callback) => {
    const { id } = query;

    callback(null, mockCassandraStorage[id]);
  };

  ProductModelMock.find = (query, options, callback) => {
    callback(null, Object.values(mockCassandraStorage));
  };
  // Mock the Update method promise
  ProductModelMock.update = (query, updatedRecord, callback) => {
    const { id } = query;
    mockCassandraStorage[id] = updatedRecord;

    callback(null, updatedRecord);
  };
  // Mock the Read method promise
  ProductModelMock.delete = (query, callback) => {
    const { id } = query;
    delete mockCassandraStorage[id];

    callback(null, {});
  };

  return ({
    instance: {
      product: ProductModelMock,
    },
  });
});
