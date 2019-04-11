const submitData = (data) => {
  return {
    type: 'SUBMIT_DATA',
    payload: data
  }
};

export {
  submitData
}
