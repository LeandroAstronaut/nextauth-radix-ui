"use client"
import React from 'react';
import {Container, TextField, TextArea, Button, Card, Flex, Heading} from '@radix-ui/themes';
import { TrashIcon } from '@radix-ui/react-icons';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter, useParams } from 'next/navigation';

function TaskNewPage() {

    const router = useRouter();
    const params = useParams();

    console.log(params);

    const {control, handleSubmit} = useForm({
        values: {
            tittle: '',
            description: '',
        }
    });

    const onSubmit = handleSubmit (async (data)=> {


        if (!params.projectId){
            const res = await axios.post('/api/projects', data);

            if (res.status === 201){
                router.push("/dashboard");
                router.refresh();
            }
        }else{
            console.log("updating");
        }

    })

    return (
        <Container size="1" height="100%" className="p-3 md:pd-0">
            <Flex className="h-screen items-center">
                <Card className="w-full">
                    <form className="flex flex-col gap-y-2" onSubmit={onSubmit}>
                        <Heading>
                            {
                                params.projectId ? "Edit project" : "New Project"
                            }
                        </Heading>
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
                            {
                                params.projectId ? "Edit project" : "Create Project"
                            }
                        </Button>
                    </form>
                    <div
                    className='flex justify-end my-4'>
                        {
                        params.projectId && (
                            <Button color='red'>
                                <TrashIcon />
                                Delete
                            </Button>
                        )
                        }
                    </div>

                </Card>
            </Flex>
        </Container>
    )
}

export default TaskNewPage