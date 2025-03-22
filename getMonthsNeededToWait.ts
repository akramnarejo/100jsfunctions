{/*
    Problem statement:
    Write a function name getMonthsNeededToWait that receives 2 numbers as parameters, representing the index of two months.
    The function should return the number of months we have to wait, to get from the first month to the second one.

    constraints: start >= 0, end >= 0

    example:
    input: start = 1, end = 3
    output: 2
    Explaination: We have to wait 2 months to get from January to March
    input: start = 11, end = 0
    output: 1
    Explaination: We have to wait 1 month to get from December to January

*/}

function getMonthsNeededToWait(start: number, end: number): number {
    if(end < start){
        return end + (12 - start)
    }
    return end - start
}

export { getMonthsNeededToWait };