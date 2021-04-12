/**
 * Static helpers methods for querystring managment
 * and build filter params
 */

/**
 * get querystring param value
 * @param {String} [query] querystring parameters subpart
 * @param {String} [param] querystring param name
 * @returns {string} unescape value
 */
function getQueryParamValue(param) {
  const query = window.location.search.substring(1);
  const params = query.split('&');
  for (let i = 0; i < params.length; i += 1) {
    const pair = params[i].split('=');
    if (pair[0] === param) {
      return unescape(pair[1]);
    }
  }
  return null;
}

export default getQueryParamValue;
