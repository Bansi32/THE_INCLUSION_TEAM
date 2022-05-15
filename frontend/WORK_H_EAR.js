intent()
const What_CAN_I_DO_HERE = [
    'how can you help me',
    'can you help me'
]
intent(What_CAN_I_DO_HERE, p => {
    p.play('I am Alan your voice assistant, ask me question and directions');
});
const WHAT_IS_THIS = [
    'This is an appointment app, and I am Alan your voice assistant',
    'what is this app',
    'how can you help me',
    'who are you',
    'can you help me',
]
intent(WHAT_IS_THIS, p => {
    p.play('This is Alan here to help you find relevent jobs Smoothly. Would you like to regiser or signUp',
        'I am you assistant to find you jobs all with your voice Would you like to regiser or signUp',
        'ask me questions like, what kid of jobs are available. Would you like to regiser or signUp')
});
const jobList = [
    {
        id: 1,
        company:"Amazon",
        post:'Customer Service',
        jobDescription:`Handle customer complaints, provide appropriate solutions and alternatives within the time limits; follow up to ensure resolution. Keep records of customer interactions, process customer accounts and file documents. Follow communication procedures, guidelines and policies. Take the extra mile to engage customers.`,
        stipend: 300,
        HR:"Anita Shah"
    },
    {
        id: 2,
        company:"Google",
        post:'Teaching',
        jobDescription:'A Teacher is a professional who teaches students based on national curriculum guidelines within their specialist subject areas. Their duties include assigning homework, grading tests, documenting progress and keeping up with parent communication.',
        stipend:1500,
        HR:"Sumit Mishra"
    },
    {
        id: 3,
        company:"Zara",
        post:'Motivational Speakers',
        jobDescription:"As a Motivational Speaker, you will be responsible for inspiring and motivating people. You will also be responsible for creating and writing realistic speeches. You should be incorporating real-life situations in your speeches. Your ultimate goal will be to deliver a powerful speech to a large group of people.",
        stipend: 1999,
        HR:"Rishita Barkhade "
    },
    {
        id: 4,
        company:"Udaan",
        post:'Marketing',
        jobDescription:"Monitor market trends, create advertising campaigns, develop pricing strategies and targeting strategies based on demographic data and work with the company to develop more awareness of what they offer.",
        stipend: 1700,
        HR:"Rohit Malvi"
    },
    {
        id: 5,
        company:"NIB",
        post:'Teaching',
        jobDescription:"A Teacher is a professional who teaches students based on national curriculum guidelines within their specialist subject areas. Their duties include assigning homework, grading tests, documenting progress and keeping up with parent communication.",
        stipend: 1000,
        HR:"Sunita Patle"
    }
    
]

intent('Show me jobs',p=>{
    p.play({command:'getJobs',data:jobList});
    p.play("'Here's the available jobs");
});

intent('order by $(ORDER_BY company|stipend)',p=>{
   p.play(`Ordering by ${p.ORDER_BY.value}`); 
   const orderByField=p.ORDER_BY.value;
    let orderedNames=jobList;
        switch(orderByField){
            case 'company':
                orderedNames=jobList.sort((p1,p2)=>p1.company.localeCompare(p2.company));
                break;
             case 'stipend':
                orderedNames=jobList.sort((p1,p2)=>p1.stipend-p2.stipend);
                break;
        }
    p.play({command:'getJobs',data:orderedNames});
    p.play(`ordering by ${p.ORDER_BY.value}`);
});


const applyForThisJob=jobList.map(item=>item.company).join("|");

intent(`Apply for $(APPLY ${applyForThisJob})`,'Apply for $(UNAVAILABLE_ITEM* .*)',p=>{
    
    
    
    if(p.UNAVAILABLE_ITEM){
        p.play(`That job is currently unavailable.`);
    }
    else{
        const cName=p.APPLY.value;
        const companyApply=jobList.find((jobLists)=>{
        return jobLists.company.toLowerCase()===cName.toLowerCase();
    });
    p.play({command:'applyToJob',data:companyApply}); 
        p.play(`Application form for ${p.APPLY.value} is open`);
    }
});

intent('Open form $(Open)',p=>{
   
   p.play('Form is open please fill the details')
});
















