const login = (userData) => ({
  type: 'LOGIN',
  payload: { userData },
});

const registerCostumer = (costumerData) => ({
  type: 'REGISTER_COSTUMER',
  payload: { costumerData },
});

const removeCostumer = (costumerId) => ({
  type: 'REMOVE_COSTUMER',
  payload: { costumerId },
});

export { login, registerCostumer, removeCostumer };
