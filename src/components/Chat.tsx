'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useChat } from 'ai/react'
import { ScrollArea } from './ui/scroll-area'
import { Send } from 'lucide-react'

export function Chat(){

    const  { messages, input, handleInputChange, handleSubmit} = useChat({
        api: '/api/chat',
    })

    return(
        <Card className="w-[440px] bg-zinc-900 border-none shadow-2xl shadow-zinc-900">
            <CardHeader className='flex flex-row items-center gap-4'>
                <Avatar>
                    <AvatarFallback>RD</AvatarFallback>
                    <AvatarImage src="https://github.com/rafael2d.png"/>
                </Avatar>
                <div>
                    <CardTitle className="text-zinc-50">Rafael Diniz</CardTitle>
                    <CardDescription className="text-zinc-100">SDK da Vercel para criar um chat bot.</CardDescription>
                </div>
            </CardHeader>

            <CardContent>
                <ScrollArea className='h-[600px] w-full pr-4'>
                { messages.map(message => {
                    return (
                        <>
                        
                        {message.role === 'user' && (
                            <div key={message.id} className='flex justify-between gap-3 text-slate-100 text-sm bg-purple-700 p-5 rounded-lg mb-4'>            
                                <p className='leading-relaxed'>
                                <span className='block font-bold text-slate-50'>Você:</span>
                                {message.content}
                                </p>

                                <Avatar>
                                    <AvatarFallback>U</AvatarFallback>
                                    <AvatarImage src="https://cdn-icons-png.flaticon.com/512/4712/4712010.png"/>
                                </Avatar>
                            </div>
                        )}
                        
                        {message.role === 'assistant' && (
                            <div key={message.id} className='flex gap-3 text-slate-100 text-sm bg-purple-500 p-5 rounded-lg mb-4'>
                                <Avatar>
                                    <AvatarFallback>RD</AvatarFallback>
                                    <AvatarImage src="https://github.com/rafael2d.png"/>
                                </Avatar>
                                <p className='leading-relaxed'>
                                <span className='block font-bold text-slate-50'>Rafa:</span>
                                {message.content}
                                </p>
                            </div>

                        )}
                        
                        </>
                    )
                })}
                </ScrollArea>
            </CardContent>

            <CardFooter>
                <form className='w-full flex gap-2' onSubmit={handleSubmit}>
                    <Input placeholder="Como eu posso te ajudar?" value={input} onChange={handleInputChange}/>
                    <Button className='bg-purple-700' type="submit"><Send /></Button>
                </form>
            </CardFooter>
        </Card>
    )
}