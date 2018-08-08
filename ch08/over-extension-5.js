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
const wish = require('wish');
const deepEqual = require('deep-equal');
report = new GenericReport({whatever: 'we want', to: 'add'});
wish(deepEqual(report.printReport({extra: 'params'}),
     {whatever:"we want", to:"add", extra:"params"}));
