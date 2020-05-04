import React from "react";
import { Link } from "react-router-dom";

import {
    MainSell,
    CentralBlock,
    TestBlock,
    HeaderSell,
    PriceText,
    SellFor,
    InputBlock,
    InputLenght,
} from "./styleSell";
import styled from "styled-components";
import arrow from "../img/arrow.svg";

// Стили Компонента Chart начало ****
// Стили Компонента Chart Конец ****

class Buy extends React.Component {
    state = {
        name: null,
        price: null,
        symbol: null,
        amount:null,
        id:null,
        pieces: "",

    };
    componentDidMount() {
        window.scrollTo(0, 0);
        const { stockTicker, stockName, stockAmount,stockId } = this.props.location.state; //Беру state из тега Link в компоненте Stock
        this.setState({
            name: stockName,
            symbol: stockTicker,
            amount:stockAmount,
            id:stockId,
        });
    }
    // Функция выделяющая числа после точки для ее уменьшения в стилях в дальнейшем
    numberAfterDot = (value) => {
        if (value) {
            value.toFixed(2);
            value = value + "";
            const digits = value.substring(value.indexOf(".") + 1);
            return "." + digits.substring(0, 2);
        } else return null;
    };
    // Функция увеличения значения в input
    handlerPlus = () => {
        this.setState({ pieces: +this.state.pieces + 1 });
    };
    // Функция уменьшения значения в input
    handlerMinus = () => {
        if (this.state.pieces <= 0) this.setState({ pieces: 0 });
        else this.setState({ pieces: +this.state.pieces - 1 });
    };
    //Функция отправки полученных данных на API команды начало ****

    //Функция отправки полученных данных на API команды конец ****

    // Функция записывающая текущее значение value input  в state pieces
    changeValue = (e) => {
        this.setState({ pieces: e.target.value });
        if (e.target.value.length === 0) e.target.style.width = `100px`;
        else {
            e.target.style.width = (e.target.value.length + 20) * 8 + "px"; // Динамическое расширение и уменьшения поля input в зависимости от введенного значения
        }
        parseInt(e.target.value);
    };
    render() {
        return (
            <TestBlock>
                <MainSell>
                    <HeaderSell>
                        <Link to={"/Account"}>
                            <img src={arrow} alt="arrow" />
                            Back
                        </Link>
                        <h2>Sell {this.state.name}</h2>
                    </HeaderSell>
                    <CentralBlock>
                        <PriceText>
                            {/*{Math.trunc(this.state.price)}*/}
                            {/*<span>{this.numberAfterDot(this.state.price)} $</span>*/}
                        </PriceText>
                        <InputBlock>
                            <button onClick={this.handlerMinus}>-</button>
                            <InputLenght
                                type="number"
                                min="0"
                                onChange={this.changeValue}
                                value={this.state.pieces}
                                placeholder="0"
                            />
                            <button onClick={this.handlerPlus}>+</button>
                        </InputBlock>
                        <SellFor>
                            Sell for {Math.trunc(this.state.pieces * this.state.price)}
                            <span>
                {this.numberAfterDot(this.state.pieces * this.state.price)} $
              </span>
                        </SellFor>
                        <Link
                            to={{
                                pathname:'/Sell'
                            }}
                        >
                            <p>Sell</p>
                        </Link>
                    </CentralBlock>
                </MainSell>
            </TestBlock>
        );
    }
}
export default Buy;
