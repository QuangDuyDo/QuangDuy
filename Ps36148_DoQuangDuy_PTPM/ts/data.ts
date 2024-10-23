

type Tservice = {
    serviceName: string;
    serviceDescription: string;
}

type Ttestimonials = {
    customerName: string;
    customerComment: string;
}

type menu = {
    string: string;
    link: string;
}


const service_arr: Tservice[] = [
    { serviceName: "Phòng đôi", serviceDescription: "Phù hợp với những nhóm người đi 2 người." },
    { serviceName: "Phòng đơn", serviceDescription: "Phù hợp với những người đi một mình" },
    { serviceName: "Phòng lớn", serviceDescription: "Phù hợp với nhóm người từ 5 6 người." },
]
const testimonials_arr: Ttestimonials[] = [
    {
        customerName: "Phan Văn Trị", customerComment: "Tôi đẫ có một kỳ nghỉ thật thoải mái ở đây."
    },
    { customerName: "Nguyễn Văn Quá", customerComment: "Phòng rộng và sạch sẽ." }

]
const menu_arr: menu[] = [
    { string: "Giới thiệu", link: "#GT" },
    { string: "Dịch vụ", link: "#DV" },
    { string: "Phản hồi", link: "#PH" },
    { string: "Liên hệ", link: "#LH" },
]

export{menu, Ttestimonials, Tservice}
export{menu_arr, testimonials_arr, service_arr}