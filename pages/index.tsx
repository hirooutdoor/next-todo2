
import { OrderSortButton } from 'components/OrderSort'
import { TodoState } from 'components/TodoState'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from 'styles/Home.module.css'

export default function Home() {

  const [todos, setTodos] = useState([
    {
      title: "test1",
      status: "Not Yet"
    },
    {
      title: "test2",
      status: "In Progress"
    },
    {
      title: "test3",
      status: "Done"
    }
  ])

  return (
    <div className={styles.container}>
      <Head>
        <title>Next TODO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.appTitle}>NEXT TODO</h1>

        {/* Add Form */}
        <div className={styles.card}>
          <div className={styles.input_area}>
            <input
              className={styles.input}
              type="text"
              placeholder="Input what to do here"
            />
            <div className={styles.pull_down}>
              <TodoState />
            </div>
            <button className={styles.add_button}>Add</button>
          </div>
        </div>

        {/* Todo List */}
        <div className={styles.card}>
          <div className={styles.list_head}>

            {/* Status Sort */}
            <div className={styles.stateSort_area}>
              <p>All</p>
              <p>Not Yet</p>
              <p>In Progress</p>
              <p>Done</p>
            </div>
            {/* State Sort */}
            
            {/* Order Sort Button*/}
            <div className={styles.pulldown_orderSort}>
              <OrderSortButton/>
            </div>
            {/* id & name Sort Button*/}
          
          </div>
          

          {/* List */}
          <ul>
            {todos.map((todo) => {
              return (
              <div key={todo.title} className={styles.list_row}>
                <li className={styles.todo_title}>{todo.title}</li>
                <p className={styles.todo_state}>{todo.status}</p>
                <button className={styles.edit_button}>Edit</button>
                <button className={styles.edit_button}>Delete</button>
              </div>
              )
            })}
          </ul>
        </div>
        {/* List */}

        {/* Edit Form */}
        <div className={styles.input_area}>
          <input
            className={styles.input}
            type="text"
            placeholder="Edit what to do here"
          />
          <div className={styles.pull_down}>
            <TodoState />
          </div>
          <button className={styles.add_button}>Save</button>
        </div>
      </main>
        {/* Edit Form */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

