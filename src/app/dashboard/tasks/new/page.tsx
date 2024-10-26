"use client"
import React from 'react';
import {Container, TextField, TextArea, Button, Card, Flex, Heading} from '@radix-ui/themes';
import { useForm, Controller } from 'react-hook-form';

function TaskNewPage() {
    const {control, handleSubmit} = useForm({
        values: {
            tittle: '',
            description: '',
        }
    });

    const onSubmit = handleSubmit ((data)=> {
        console.log(data)
    })

    return (
        <Container size="1" height="100%" className="p-3 md:pd-0">
            <Flex className="h-screen items-center">
                <Card className="w-full">
                    <form className="flex flex-col gap-y-2" onSubmit={onSubmit}>
                        <Heading>Create Project</Heading>
                        <label>Project Tittle</label>
                        <Controller
                            name="tittle"
                            control={control}
                            render={({field}) => {
                                return (
                                    <TextField.Root size="3" placeholder="Search the docs…" {... field} />
                                )
                            }}
                        />

                        <label>Description</label>
                        <Controller
                            name="description"
                            control={control}
                            render={({field}) => {
                                return (
                                    <TextArea size="3" placeholder="Reply to comment…" {... field} />
                                )
                            }}
                        />


                        <Button className="mt-10">
                            Create Project
                        </Button>
                    </form>
                </Card>
            </Flex>
        </Container>
    )
}

export default TaskNewPage