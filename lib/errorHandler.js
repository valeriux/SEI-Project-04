function errorHandler(err, req, res, next) {
  console.log(err)

  let status = 500
  let message = err.message || 'Internal server error'

  let errors = null

  if(err.name === 'ValidationError') {
    status = 422
    errors = {}
    message = 'Validation fail'
    for(const field in err.errors) {
      errors[field] = err.errors[field].message
    }
  }

  res.status(status).json({ message, errors })
  next(err)
}

module.exports = errorHandler
