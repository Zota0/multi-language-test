export function redirect(url) {
    n = window.open(url, '_self')
    if(n == null) {
        return true
    }
        return false
}