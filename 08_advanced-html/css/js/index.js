function getCurrentDate(){
  let local = new Date();
  local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
  return local.toJSON().slice(0,10);
}

document.getElementById('arrival-date').value = getCurrentDate();
