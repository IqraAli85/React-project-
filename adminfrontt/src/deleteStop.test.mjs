import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { updateStop } from 'api/stop/updateStop/:id';

const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { updateStop } = require('api/stop/updateStop/:id');

describe('updateStop API', () => {
  let mock;

  beforeEach(() => {
    // Create a new Axios Mock Adapter instance
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    // Restore mock adapter on each test completion
    mock.restore();
  });

  it('should update a stop successfully', async () => {
    // Arrange: Set up mock response for a successful update
    const stopId = '652420b5cb233a79551fec74'; // Replace with a valid stop ID
    const requestData = {}; // Replace with your update data
    const expectedResponse = { success: true, message: 'Stop updated successfully' };

    mock.onPut(`/api/stop/updateStop/${stopId}`, requestData).reply(200, expectedResponse);

    // Act: Make the update request
    const response = await updateStop(stopId, requestData);

    // Assert: Check if the response matches the expected response
    expect(response).toEqual(expectedResponse);
  });

  it('should handle update failure', async () => {
    // Arrange: Set up mock response for a failed update
    const stopId = 'your-stop-id'; // Replace with a valid stop ID
    const requestData = {}; // Replace with your update data
    const expectedResponse = { success: false, message: 'Failed to update stop' };

    mock.onPut(`/api/stop/updateStop/${stopId}`, requestData).reply(500, expectedResponse);

    // Act: Make the update request
    const response = await updateStop(stopId, requestData);

    // Assert: Check if the response matches the expected response
    expect(response).toEqual(expectedResponse);
  });
});
