export const filterByAttribute = ({ data, attribute = 'category', value }) => {
    if (!value) {
        return data
    }
    return data.filter((item) => item[attribute] === value)
}

export const sortByDate = (data) => {
    return data.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        }
        if (a.date > b.date) {
            return -1
        }
        // a must be equal to b
        return 0
    })
}
