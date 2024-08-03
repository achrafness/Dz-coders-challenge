import { Component } from "react";

class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data :  [
                ["1954", "بداية الثورة"],
                ["1955", "هجمات الشمال القسنطيني"],
                ["1956", "مؤتمر الصومام"],
                ["1957", "معركة الجزائر"],
                ["1962", "الاستقلال"]
            ]
        }
    }
    render() {
        const { data } = this.state;
        return (
            <div className="px-10 py-10 flex   timeline relative text-white bg-[#eee]" dir="rtl">
                <div className="z-10 w-1/2">
                    <p className="text-5xl self-start text-black">الاحداث التاريخية خلال الثورة </p>
                    {/* timeline */}
                    <ul className="relative border-r  border-gray-500 ">
                        {
                            data.map((item, index) => {
                                return (
                                    <li className="p-4" key={index}>
                                        <span class="absolute flex items-center justify-center w-6 h-6 bg-red-500 rounded-full -start-3 ring-8 ring-white ">
                                            <svg class="w-2.5 h-2.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                            </svg>
                                        </span>
                                        <div className="mr-8">
                                            <h1 className="text-3xl text-gray-900">{item[0]}</h1>
                                            <h1 className="text-gray-600">{item[1]}</h1>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <div className="timeline-pct relative z-10">
                        <img src="./timeline.jpg" className="z-10" />
                    </div>
                </div>
            </div>
        )
    }
}
export default Timeline