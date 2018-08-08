class Report{
  constructor(params){
    this.params = params;
  }
  printReport(params){
    return params;
  }
}
class GenericReport extends Report{
  constructor(params){
    super(params);
    this.params = params;

  }
  printReport(params){
    return super.printReport(Object.assign(this.params, params));
  }

}
class ClientReport extends GenericReport{
  constructor(params){
    super(params);
    this.params = params;

  }
  printReport(params){
    return super.printReport(Object.assign(this.params, params));
  }

}
class SpecificClientReport extends ClientReport{
  constructor(params){
    super(params);
    this.params = params;
  }
  printReport(params){
    return super.printReport(Object.assign(this.params, params));
  }

}
const report = 
new SpecificClientReport({whatever: 'we want', to: 'add'});
console.log(report.printReport({extra: 'params'}));

const wish = require('wish');
const deepEqual = require('deep-equal');
wish(report.printReport({extra: 'params'}), true);
