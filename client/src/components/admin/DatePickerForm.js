import React, { useState } from 'react'
import { useEffect } from 'react';
import { Form } from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function DatePickerForm({ item, count, selectCourse, setSelectCourse }) {
    return (
        <Form.Group className='mb-3' controlId='desc'  >
            <Form.Label>{item} Dersine Katılım Tarihi</Form.Label>
            <DatePicker dateFormat="dd/MM/yyyy" selected={selectCourse[count]?.date} onChange={(date) => {
                let newSelected = [...selectCourse];
                newSelected[count] = { class: item, date: date, localDate: date.toLocaleDateString(), isPaid: false }
                setSelectCourse([...newSelected]);
            }} />
        </Form.Group>
    )
} 
