import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Payment from '../../../src/Domain/Payment';
import TransferService from '../../../src/Services/TransferService';

describe('Deveria buscar uma transferência por key', function () {
  it('Deveria retornar a lista das transferências por key', async function () {
    // Arrange
    const paymentOutput: Payment = new Payment(
      'Vinicius',
      'Ricardo',
      50,
      '187.401.600-33',
      '63319d80feb9f483ee823ac5',
    );
    sinon.stub(Model, 'find').resolves([paymentOutput]);

    // Act
    const service = new TransferService();
    const result = await service.getByKey('187.401.600-33');

    // Assert
    expect(result).to.be.deep.equal([paymentOutput]);

    sinon.restore();
  });  
});