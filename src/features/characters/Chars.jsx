import { Component } from "react";
import data from "../../Data.json";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import "./style.css"

class Chars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            index: 0,
        };
    }

    formatDate = (dateString) => {
        try {
            const [day, month, year] = dateString.split("/");
            const date = new Date(`${year}-${month}-${day}`);
            const formattedDate = format(date, "d MMMM yyyy", { locale: ar });
            const arabicMonths = {
                January: "جانفي",
                February: "فيفري",
                March: "مارس",
                April: "أفريل",
                May: "ماي",
                June: "جوان",
                July: "جويلية",
                August: "أوت",
                September: "سبتمبر",
                October: "أكتوبر",
                November: "نوفمبر",
                December: "ديسمبر",
            };
            return formattedDate.replace(
                /January|February|March|April|May|June|July|August|September|October|November|December/gi,
                (matched) => arabicMonths[matched]
            );
        } catch (e) {
            return dateString;
        }
    }

    formatData = (data) => {
        data.forEach((item) => {
            if (item.death_date) {
                item.date_of_death = item.death_date;
            }
            item.birth_date = this.formatDate(item.birth_date);
            item.date_of_death = this.formatDate(item.date_of_death);
        });
        return data;
    }

    setIndex = (index) => {
        this.setState({ index });
    }

    componentDidMount() {
        if (data) {
            this.setState({ characters: this.formatData(data) });
        }
    }

    render() {
        const { characters, index } = this.state;
        return (
            <div dir="rtl" className="py-12">
                <div className='flex p-10 justify-center gap-3'>
                    {
                        characters.map((item, index) => {
                            return (
                                <div key={index} className='w-24 h-24 rounded-full cursor-pointer' onClick={() => this.setIndex(index)}>
                                    <img src={item.picture} alt={item.name} className='rounded-full w-24 h-24' />
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex px-10 py-5 mx-10 justify-between items-center'>
                    <div class="flip-card w-2/5 flex justify-center items-center">
                        <div class="flip-card-inner">
                            <div class="flip-card-front flex flex-col p-5 justify-between">
                                <img src={data[index].picture} alt="image" className='h-3/4 rounded-lg size-44' />
                                <p>{data[index].name}</p>
                            </div>
                            <div class="flip-card-back">
                                <p>ولد {"(ت)"} {data[index].birth_date}</p>
                                {data[index].date_of_death != "على قيد الحياة" && <p>توفي {"(ت)"}  {data[index].date_of_death}</p>}
                            </div>
                        </div>
                    </div>
                    <div className='w-3/5 p-10'>
                        <p>{data[index].description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chars;
