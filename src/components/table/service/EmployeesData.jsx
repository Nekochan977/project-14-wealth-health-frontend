export const EmployeesData = {
     getEmployeesData() {
        return[
            {
                firstName:"Hskueyfh",
                lastName: "Flsdhfd",
                address: "mlkdhfmqlisqe 123 lsehfz 0878"
            },
            {
                firstName:"Aljdshf",
                lastName: "Miuhdo",
                address: "mlkdhfmqlisqe 123 lsehfz 0878"
            },
            {
                firstName:"Zoiudfg",
                lastName: "Pisudgfdzi",
                address: "mlkdhfmqlisqe 123 lsehfz 0878"
            },
            {
                firstName:"Hskueyfh",
                lastName: "Flsdhfd",
                address: "mlkdhfmqlisqe 123 lsehfz 0878"
            },
            {
                firstName:"Aljdshf",
                lastName: "Miuhdo",
                address: "mlkdhfmqlisqe 123 lsehfz 0878"
            },
            {
                firstName:"Zoiudfg",
                lastName: "Pisudgfdzi",
                address: "mlkdhfmqlisqe 123 lsehfz 0878"
            },
        ]
    },
    getData() {
         return Promise.resolve(this.getEmployeesData())
    }
}