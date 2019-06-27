import React, { Component } from 'react';
import styles from './HomePage.module.css';
import NewUser from '../components/NewUser/NewUser';
import UsersList from '../components/AllUsers/AllUsers';
import ProductList from '../components/Products/ProductsList';

const signupUrl = `http://localhost:8081/signup`;
const usersUrl = `http://localhost:8081/users`;
const productsUrl = `http://localhost:8081/products`;

class HomePage extends Component {
  state = {
    username: ``,
    password: ``,
    email: ``,
    phone: ``,
    userCreated: {},
    isAllInputsFilled: true,
    userAlreadyExist: false,
    allUsers: [],
    products: [],
  };

  toogleIsAllinputsFilled = () => {
    this.setState(state => ({
      isAllInputsFilled: !state.isAllInputsFilled,
    }));
  };

  toogleUserAlreadyExist = () => {
    this.setState(state => ({
      userAlreadyExist: !state.userAlreadyExist,
    }));
  };

  signUp = e => {
    e.preventDefault();
    const {
      username,
      password,
      phone,
      email,
      isAllInputsFilled,
      userAlreadyExist,
    } = this.state;

    // Если поля пустые то показываем ошибку

    if (username === `` || password === `` || phone === `` || email === ``) {
      if (isAllInputsFilled) this.toogleIsAllinputsFilled();
      console.log(`Error: All fields must be filled`);
      return;
    }
    if (
      (username !== `` || password !== `` || phone !== `` || email !== ``) &&
      !isAllInputsFilled
    ) {
      console.log(`OK: ALL fields are filled`);
      this.toogleIsAllinputsFilled();
    }

    const newUser = {
      username,
      password,
      phone,
      email,
    };
    console.log(`its a new user`, newUser);

    fetch(signupUrl, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser), // тип данных в body должен соответвовать значению заголовка "Content-Type"
    })
      .then(response => response.json())
      .then(data => {
        console.log(`resp from server`, data);
        if (data.status === 'error') {
          console.log(`error exist`);

          if (!userAlreadyExist) {
            this.toogleUserAlreadyExist();
          }
          return;
        }

        if (userAlreadyExist) {
          this.toogleUserAlreadyExist();
        }

        this.setState({
          userCreated: { ...data },
        });
        setTimeout(() => {
          this.setState({
            userCreated: {},
          });
        }, 1500);
      });
  };

  showUsers = () => {
    fetch(usersUrl)
      .then(resp => resp.json())
      .then(data => {
        console.log(`resp of users`, data);

        this.setState({
          allUsers: [...data],
        });
      })
      .catch(data => console.error(`error blyat`, data));
  };

  showProducts = () => {
    console.log(`get products`);

    return fetch(productsUrl)
      .then(resp => resp.json())
      .then(data => {
        console.log(`resp of products`, data);

        this.setState({
          products: [...data],
        });
      })
      .catch(data => console.error(`error blyat`, data));
  };

  closeUserList = () => {
    this.setState({ allUsers: [] });
  };

  closeProductList = () => {
    this.setState({ products: [] });
  };

  onInputLogin = e => {
    // console.log(e.target.value);
    this.setState({ username: e.target.value });
  };

  onInputPassword = e => {
    // console.log(e.target.value);
    this.setState({ password: e.target.value });
  };

  onInputEmail = e => {
    // console.log(e.target.value);
    this.setState({ email: e.target.value });
  };

  onInputPhone = e => {
    // console.log(e.target.value);
    this.setState({ phone: e.target.value });
  };

  render() {
    const {
      userCreated,
      isAllInputsFilled,
      allUsers,
      userAlreadyExist,
      products,
    } = this.state;
    return (
      <>
        <form action="" className={styles.form}>
          <h1>Регистрация</h1>
          <div className={styles[`form-wrapper`]}>
            <input
              type="text"
              className={styles.input}
              onChange={this.onInputLogin}
            />
          </div>
          <div className={styles[`form-wrapper`]}>
            <input
              type="password"
              className={styles.input}
              onChange={this.onInputPassword}
            />
          </div>
          <div className={styles[`form-wrapper`]}>
            <input
              type="number"
              className={styles.input}
              onChange={this.onInputPhone}
            />
          </div>
          <div className={styles[`form-wrapper`]}>
            <input
              type="email"
              className={styles.input}
              onChange={this.onInputEmail}
            />
          </div>
          <div className={styles[`form-wrapper`]}>
            <button type="submit" onClick={this.signUp}>
              Регистрация
            </button>
            <button type="button" onClick={this.showUsers}>
              Показать всех пользователей
            </button>
          </div>
        </form>

        {!isAllInputsFilled && <p>Заполните все поля</p>}
        {userAlreadyExist && (
          <p>Пользователь с таким логином уже существует!</p>
        )}
        {userCreated.status === 'success' && (
          <NewUser userCreated={userCreated.user} />
        )}
        {allUsers.length !== 0 && (
          <UsersList allUsers={allUsers} closeUserList={this.closeUserList} />
        )}
        <div>
          <button type="button" onClick={this.showProducts}>
            Показать пиццу?
          </button>
          {products.length !== 0 && (
            <ProductList
              data={products}
              closeProductList={this.closeProductList}
            />
          )}
        </div>
      </>
    );
  }
}

export default HomePage;
