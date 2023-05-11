import * as React from 'react';
import BlogItem from '../../components/BlogItem';

const Home = () => {
    return (
        <section>
            <div class="mx-80 mt-10">
                <hr/>
                <div class="mt-10">
                    <div class="mb-10">
                        <h1 class="text-5xl">BLOG OCEAN</h1>
                    </div>
                    <div class="grid grid-cols-2 gap-8">
                        <BlogItem image="/sea-1.jpg" title="What 's make the sky blue" link="/"></BlogItem>
                        <BlogItem image="/sea-1.jpg" title="What 's make the sky blue" link="/"></BlogItem>
                        <BlogItem image="/sea-1.jpg" title="What 's make the sky blue" link="/"></BlogItem>
                        <BlogItem image="/sea-1.jpg" title="What 's make the sky blue" link="/"></BlogItem>
                        <BlogItem image="/sea-1.jpg" title="What 's make the sky blue" link="/"></BlogItem>
                        <BlogItem image="/sea-1.jpg" title="What 's make the sky blue" link="/"></BlogItem>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;