import React, {useEffect, useState} from 'react';
import * as Mui from '@mui/material';
import {Box, ThemeProvider} from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const Registrationbutton = () => {
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        middleName: '',
        withoutMiddleName: false,
        gender: 'M',
        dateOfBirth: '',
        email: '',
        address: '',
        password: '',
        confirmPassword: '',
    });

    // Обработчик отправки формы
    const register = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/user/register', formData);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value, type } = event.target;

            setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? event.target.checked : value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement form submission logic here
        console.log('Form submitted:', formData);
    };

    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/telnum`;
        navigate(path);
    };


    return (
        <Mui.Container maxWidth="sm">
            <Mui.Typography variant="h4" gutterBottom sx={{
                ml: 5,
            }}>
                Регистрация
            </Mui.Typography>
            <Mui.Box component="form" onSubmit={handleSubmit} noValidate sx={{
                width: 400,
                height: 800,
                borderRadius: 10,
                borderColor: '#77777',
                border: 1,
                bgcolor: 'transparent',
                ml: -6,

            }}>
                <Mui.TextField
                    margin="normal"
                    required
                    id="lastName"
                    label="Фамилия"
                    name="lastName"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    sx={{
                        ml: 12,
                        width: 200,
                    }}
                />
                <Mui.TextField
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="Имя"
                    name="firstName"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    sx={{
                        ml: 12,
                        width: 200,
                    }}
                />
                <Mui.TextField
                    margin="normal"
                    fullWidth
                    id="middleName"
                    label="Отчество"
                    name="middleName"
                    autoComplete="middle-name"
                    value={formData.middleName}
                    onChange={handleChange}
                    sx={{
                        ml: 12,
                        width: 200,
                    }}
                />
                <Mui.FormControlLabel
                    control={<Mui.Checkbox checked={formData.withoutMiddleName} onChange={handleChange} name="withoutMiddleName" />}
                    label="По паспорту без отчества"
                />
                <Mui.FormControl>
                    <Mui.InputLabel id="gender-label">Пол</Mui.InputLabel>
                    <Mui.Select
                        labelId="gender-label"
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <Mui.MenuItem value="M">Мужской</Mui.MenuItem>
                        <Mui.MenuItem value="F">Женский</Mui.MenuItem>
                    </Mui.Select>
                </Mui.FormControl>
                <Mui.TextField
                    margin="normal"
                    required
                    fullWidth
                    id="dateOfBirth"
                    label="Дата рождения"
                    name="dateOfBirth"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    sx={{
                        ml: 12,
                        width: 200,
                    }}
                />
                <Mui.TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Электронная почта"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{
                        ml: 12,
                        width: 200,
                    }}
                />
                <Mui.TextField
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Адрес проживания"
                    name="address"
                    autoComplete="shipping address"
                    value={formData.address}
                    onChange={handleChange}
                    sx={{
                        ml: 12,
                        width: 200,
                    }}
                />
                <Mui.TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Пароль"
                    name="password"
                    autoComplete="current-password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    sx={{
                        ml: 12,
                        width: 200,
                    }}
                />
                <Mui.TextField
                    margin="normal"
                    required
                    fullWidth
                    id="confirmPassword"
                    label="Повторить пароль"
                    name="confirmPassword"
                    autoComplete="current-password"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    sx={{
                        ml: 12,
                        width: 200,
                    }}
                />
                <Mui.Button onClick={register} type="submit" variant="contained" color="primary" sx={{ mt: 3, mb: 2, ml: 11.5, bgcolor: "red" }}>
                    Зарегистрироваться
                </Mui.Button>
            </Mui.Box>
        </Mui.Container>
    );
};

export default Registrationbutton;

