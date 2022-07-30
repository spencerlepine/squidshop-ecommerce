/* eslint-disable no-param-reassign */
/*
 *  Mock for `express-cassandra` ORM driver
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *    - Mock the ORM models and CRUD method
 *    - Avoid connectinng to Cassandra database
 *    - Use in-memory storage for test environment
*/
jest.mock('../src/models', () => {
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
  ProductModelMock.findOne = (query) => {
    const { id } = query;

    return new Promise((resolve) => {
      resolve(mockCassandraStorage[id]);
    });
  };
  // Mock the Update method promise
  ProductModelMock.update = (query, updatedRecord) => {
    const { id } = query;
    mockCassandraStorage[id] = updatedRecord;

    return new Promise((resolve) => {
      resolve(updatedRecord);
    });
  };
  // Mock the Read method promise
  ProductModelMock.delete = (query) => {
    const { id } = query;
    delete mockCassandraStorage[id];

    return new Promise((resolve) => {
      resolve({});
    });
  };

  return ({
    instance: {
      Product: ProductModelMock,
    },
  });
});
