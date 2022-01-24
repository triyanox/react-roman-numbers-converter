import { useState } from 'react'
import Footer from './footer';
const Converter = () => {
    const [num, setNum] = useState(null);
    const handleChange = (e) => {
        setNum(e.target.value)
    }
    const convertToRoman = (num) => {
        if (isNaN(num)) {
            return "is not a number"
        }
        let myObj = {
            M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
        }
        let converted = ""
        let i
        for (i in myObj) {
            while (num >= myObj[i]) {
                converted += i
                num -= myObj[i]
            }
        }
        return converted
    }
    let roman = convertToRoman(num)
    return (
        <div className="background">
            <div class='box'>
                <div class='wave'></div>
            </div>
            <div className="container">
                <input className="input" type="number" min="1" value={num} onChange={handleChange} />
                <div className="output">{roman}</div>
            </div>
            <Footer />
        </div>

    )
}

export default Converter;