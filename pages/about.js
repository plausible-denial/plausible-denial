import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import styles from '../styles/about.module.css';
import Link from 'next/link';
import Github from '../icons/github.svg';
import Htb from '../icons/hackthebox.svg';
import LinkedIn from '../icons/linkedin.svg';

export default function About() {
  return (
    <Layout currentPage={'about'}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.icons}>
        <Link href={'https://github.com/plausible-denial'}><Github className={styles.githubIcon} /></Link>
        <Link href={'https://app.hackthebox.com/profile/964011'}><Htb className={styles.htbIcon} /></Link>
        <Link href={'https://www.linkedin.com/in/pl4us1bled3n1al'}><LinkedIn className={styles.linkedinIcon} /></Link>
      </section>
      <section className={styles.about}>
        <p>Hello, I'm a passionate IT professional with experience in software engineering and cybersecurity.</p>
        <p>My goal is to become a cybersecurity professional, and I'm currently studying for my CompTIA Security+ certification.</p>
        <p>In my spare time, I enjoy bouldering, hiking, and volunteering with the <a href='https://www.thebmc.co.uk/en/get-involved-volunteering'>British Mountaineering Council.</a></p>
        <p>The purpose of this blog is to:</p>
        <ol>
          <li>Document my learning journey</li>
          <li>Share my experiences</li>
          <li>Help others</li>
        </ol>
      </section>
    </Layout>
  );
}
