import { Component } from "react";

class Hero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            periods: [
                {
                    title: "اندلاع الثورة الجزائرية 1954",
                    link: "https://gloriousalgeria.dz/Ar/Post/show/49/اندلاع-الثورة-الجزائرية-1954",
                    image: "https://gloriousalgeria.dz/uploads/articles/f5edc9118c291224144d6954d1c7c9fd.jpg",
                    description: "تشكّل الثورة الجزائرية (1954-1962) والتي أنهت فترة الاستعمار الفرنسي للجزائر (1830-1962) الحدث المهم في استعادة السيادة الوطنية، وتعتبر أيضا الحدث المهم في إعادة بعث الدولة الجزائرية، ولا شك ان التحضير لهذه الملحمة لم يكن بالشيء السهل والعادي، نظير ما أحاط الجزائر من عوامل وظروف صعبة.",
                },
                {
                    title: "مرحلة التنظيم و الشمولية 1956 - 1958",
                    link: "https://gloriousalgeria.dz/Ar/Post/show/125/مرحلة-التنظيم-و-الشمولية-1956---1958-",
                    image: "https://gloriousalgeria.dz/uploads/articles/02e45ab7261ddd2d99ecc3420bce0fce.jpg",
                    description: "بعد عامين تقريبا من اندلاع الثورة وأمام التطورات التي شهدتها الجزائر بعد نجاح هجمات الشمال القسنطيني في إعادة بعث روحٍ جديدة للثورة، أصبح من الضروري عقد اجتماع لقادة الثورة الجزائرية في مكان ما داخل الوطن لتقييم الأوضاع، تنسيق الجهود، وتنظيم هياكل الثورة ووضع الاستراتيجية الضرورية لمواصلة الثورة حتى النصر. و تقسيم البلاد إلى نواحي عسكرية و الجيش إلى رتب.",
                },
                {
                    title: "مرحلة الابادة 1958- 1960",
                    link: "https://gloriousalgeria.dz/Ar/Post/show/126/-مرحلة-الابادة-1958--1960-",
                    image: "https://gloriousalgeria.dz/uploads/articles/b760b389351a46834b15a2e1f9d6187f.jpg",
                    description: "تعد هذه المرحلة من أصعب المراحل التي مرت بها الثورة الجزائرية إذ تواصلت العمليات العسكرية وتوسعت بشكل ضخم، وهذا بعد أن أسندت قيادة الجيش الفرنسي للجنرال شال الذي شرع في تطبيق المشروع العسكري الحامل لاسمه للقضاء على الثورة",
                },
                {
                    title: "مـرحـلـة الـتـفاوض1960-1962",
                    link: "https://gloriousalgeria.dz/Ar/Post/show/127/مـرحـلـة-الـتـفاوض1960-1962-",
                    image: "https://gloriousalgeria.dz/uploads/articles/a7cf5b79185bc79feabcb92e659da624.jpg",
                    description: "سمحت اتفاقيات إيفيان التي وقع عليها بتاريخ 18 مارس 1962 ممثلو الحكومة المؤقتة للجمهورية الجزائرية و ممثلو الحكومة الفرنسية بالإعلان عن وقف إطلاق النار يوم 19 مارس من نفس السنة و كانت هذه نقطة انطلاق مرحلة جديدة ألا و هي مرحلة تقرير مصير شعب قدم تضحيات جسام لفرض إرادته في الاستقلال أمام محتل \"كان مقتنعا بعدم انهزامه\"،ولم تكن هذه المفاوضات باليسيرة بل اعترضتها عدة مطبات ،اجمع المؤرخون علو كعب المفاوض الجزائري في تجاوزها وخدمة القضية الجزائرية.",
                },
                {
                    title: "اعترافات الدول بالحكومة المؤقتة",
                    link: "https://gloriousalgeria.dz/Ar/Post/show/128/اعترافات-الدول-بالحكومة-المؤقتة-",
                    image: "https://gloriousalgeria.dz/uploads/articles/800c98fb1cf387657f8ea9f6728423fd.jpg",
                    description: "تعد هذه المرحلة من أصعب المراحل التي مرت بها الثورة الجزائرية إذ تواصلت العمليات العسكرية وتوسعت بشكل ضخم، وهذا بعد أن أسندت قيادة الجيش الفرنسي للجنرال شال الذي شرع في تطبيق المشروع العسكري الحامل لاسمه للقضاء على الثورة",
                }
            ]
        }
    }
    render() {
        const { periods } = this.state
        return (<div className="p-10 mx-10">
            <h1 className="text-4xl text-center my-10">مراحل الثورة الجزائرية</h1>
            <div className="flex flex-col items-center relative">
                <div className="absolute w-1 bg-gold h-full left-1/2 transform -translate-x-1/2"></div>
                {
                    periods.map((period, index) => (
                        <div key={index} className={`flex w-full mb-10 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                            <div className="flex items-center w-1/2">
                                <div className="bg-white p-4 shadow-lg flex items-center">
                                    <img src={period.image} alt={period.title} className="w-48 h-48 object-cover" />
                                    <div className="ml-4">
                                        <p className="font-bold">{period.title}</p>
                                        <p className="text-sm">{period.description}</p>
                                        <a href={period.link} target="_blank" className="mb-5 mt-4 inline-block text-red-600 border border-red-600 py-2 px-4 rounded-lg hover:bg-red-600 hover:text-white">
                                            إطلع على المزيد
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>)
    }
}

export default Hero;