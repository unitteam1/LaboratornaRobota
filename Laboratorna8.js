function Employee(name, surname, basesalary, exp)
{
    this.name = name;
    this.surname = surname;
    this.basesalary = basesalary;
    this.exp = exp;
}

Employee.prototype.countedSalary = function(exp)
{
       let countedSalary = this.basesalary;
    if (exp > 2 && exp <=5)
    {
        this.countedSalary +=  200;
    }
    if (exp > 5)
    {
        this.countedSalary  = this.countedSalary * 1.2 + 500;
    }
    return countedSalary;
}

function Developer(name, surname, basesalary, exp)
{
  Employee.call(this, name, surname, basesalary, exp);
}

function Designer(name, surname, basesalary, exp, effectivity)
{
    this.effectivity = effectivity;
    Employee.call(this,name, surname, basesalary, exp);  
}

Designer.prototype.countedSalary = function()
{
    let countedSalary = Employee.prototype.countedSalary.call(this);
    this.countedSalary *= this.effectivity;
}

let count_des = count_dev = 0;


Manager.prototype.countedSalary = function()
{
    let countedSalary = Employee.prototype.countedSalary.call(this);
    if (Managers.team.length > 5 && Managers.team.length <=10)
    {
        countedSalary += 200;
    }
    if (team.length > 10)
    {
        countedSalary += 300;
    }
    for (i=0;i<team.length;i++)
    {
        if (typeof (this.team) == Designer){
           count_des++;
        }
    }
    for (i=0;i<team.length;i++)
    {
        if (typeof(this.team) === Developer){
           count_dev++;
        }
    }
    if (count_dev > count_des)
    {
        countedSalary =  countedSalary * 1.1;
    }
    return countedSalary;
}

function Manager (name, surname, basesalary, exp, team)
{
    this.team = team;
    Employee.call(this, name, surname, basesalary, exp);
}
function Department ()
{
    this.Managers = [];

}
Department.prototype.giveSalary = function()
{

  this.Managers.forEach(function (Manager){Manager.giveSalary(); Manager.team.forEach(function(workers){workers.giveSalary()}) }) 
}

Employee.prototype.giveSalary = function()
{
 return  console.log(this.name, this.surname, this.countedSalary());
}
  


Designer.prototype = Object.create(Employee.prototype);
Manager.prototype = Object.create(Employee.prototype);
Developer.prototype = Object.create(Employee.prototype);

let John = new Designer("John","Favro", 10000, 3, 3);
let Din = new Developer("Din","Jackson", 200000, 1);
let Henry = new Developer("Henry","Cavill", 100000, 1);
let Charlie = new Designer("Charlie","Sheen", 30000, 1, 3);
let Olivia = new Designer("Olivia ","Wilde", 300000, 3, 1);
let man = new Manager("Katy", "Perry", 40000, 4, [John, Din, Henry, Charlie, Olivia]);
let department = new Department();
department.Managers.push(man);
department.giveSalary();