exports.handler = async event => {
    const subject = event.queryStringParameters.name || 'Rob'
    return {
      statusCode: 200,
      body: `Hello ${subject}!`,
    }
  }