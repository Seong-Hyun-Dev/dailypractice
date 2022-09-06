function solution(id_list, report, k) {
    let answer = [];
    let reportInfo = [];
    let mailCountObj = {};
    // 신고자 유일성 확보
    let uniReport = [...new Set(report.join('|').split('|'))].map(v=>v.split(' '));
    // id_list로 reportInfo초기화
    id_list.map(v=>{
        let eachOne = {
            name: v,
            reporter: [],
            report: false
        }
        reportInfo.push(eachOne);
        mailCountObj[v] = 0;
    });
    // id_list로
    
    uniReport.map(v=>{
        //reportInfo.name에서 v[1]과 일치하는 객체를 가져온다.
        let idx = reportInfo.findIndex(obj=>obj.name===v[1]);
        //reporter추가
        reportInfo[idx].reporter.push(v[0]);
        //만약 reporter가 k보다 많으면 [report: true로 변경하고],
        //( 먼저,id_list를 이용해서 보내줄 메일 수를 저장할 객체 mailCountObj 생성 )
        if(reportInfo[idx].reporter.length >= k){
            reportInfo[idx].report = true;
            //reportInfo[idx].reporter안에 있는 사람들에게 메일을 보내주기(+1해주기)
            reportInfo[idx].reporter.map(v=>{
                mailCountObj[v] = mailCountObj[v] + 1;
            })
        }
    });
    answer = Object.values(mailCountObj);
    // console.log(reportInfo);
    
    return answer;
}