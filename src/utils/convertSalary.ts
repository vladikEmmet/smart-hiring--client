export const converSalary = (salary: number): string => {
    const salaryString = salary.toString();
    const salaryLength = salaryString.length;
    const salaryArray = salaryString.split("");
    let salaryResult = "$";
    let counter = 0;
    for (let i = salaryLength - 1; i >= 0; i--) {
        if (counter === 3) {
            salaryResult = " " + salaryResult;
            counter = 0;
        }
        salaryResult = salaryArray[i] + salaryResult;
        counter++;
    }
    return salaryResult;
}