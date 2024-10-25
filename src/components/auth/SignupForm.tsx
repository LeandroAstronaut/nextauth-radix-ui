"use client"
import { EnvelopeClosedIcon, LockClosedIcon, PersonIcon } from '@radix-ui/react-icons'
import { Button, Flex, TextField } from '@radix-ui/themes'
import React from 'react'

function SignupForm() {
  return (
    <Flex direction="column" gap="2">

        <label htmlFor="name">Name</label>
        <TextField.Root
        type="text"
        placeholder="John Doe"
        autoFocus
        >
            <TextField.Slot>
                <PersonIcon height="16" width="16"></PersonIcon>
            </TextField.Slot>
        </TextField.Root>


        <label htmlFor="email">Email</label>
        <TextField.Root
        type="email"
        placeholder="email@domain.com"
        
        >
            <TextField.Slot>
                <EnvelopeClosedIcon height="16" width="16"></EnvelopeClosedIcon>
            </TextField.Slot>
        </TextField.Root>

        <label htmlFor="email">Password</label>
        <TextField.Root
        type="password"
        placeholder="******"
        >
            <TextField.Slot>
                <LockClosedIcon height="16" width="16"></LockClosedIcon>
            </TextField.Slot>
        </TextField.Root>
        <Button>
            Sign In
        </Button>
    </Flex>
  )
}

export default SignupForm