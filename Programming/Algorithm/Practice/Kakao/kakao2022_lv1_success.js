function solution(id_list, report, k) {
    let answer = [];
    let reportInfo = [];
    let mailCountObj = {};
    // report 배열중복제거
    let uniReport = [...new Set(report.join('|').split('|'))].map(v=>v.split(' '));
    // id_list로 reportInfo 및 mailCountObj초기화
    id_list.map( v => {
        let eachOne = {
            name: v,
            reporter: [],
            report: false
        }
        reportInfo.push(eachOne);
        mailCountObj[v] = 0;
    });

    //uniReport에서 신고자들과 신고당한사람을 찾아서 reportInfo객체 배열에 저장
    uniReport.map(v=>{
        //reportInfo.name에서 v[1]과 일치하는 객체를 가져온다.
        let idx = reportInfo.findIndex(obj=>obj.name===v[1]);
        //reporter추가
        reportInfo[idx].reporter.push(v[0]);
    });
    //만약 reporter가 k보다 많으면 [report: true로 변경하고],
    reportInfo.map(v => {
        if(v.reporter.length >= k) {
            v.report = true;
        }
    });
    //( 먼저,id_list를 이용해서 보내줄 메일 수를 저장할 객체 mailCountObj 생성 )
    //report가 true이면 reporter에 있는 사람들의 이름을 찾아서 mailCountObj의 사람 +1

    // console.log(reportInfo);
    reportInfo.map(v => {
        if(v.report === true){
            // console.log(v.reporter);
            v.reporter.map(v => {
                mailCountObj[v] = mailCountObj[v] + 1;
            });
        }
    });
    // console.log(mailCountObj);
    let tmp = Object.values(mailCountObj);
    answer = tmp;
    return answer;
}