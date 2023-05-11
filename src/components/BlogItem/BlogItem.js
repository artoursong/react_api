import * as React from 'react';

const BlogItem = (props) => {
    return (
        <div class="group">
            <div class="overflow-hidden">
                <div class="rounded-3xl overflow-hidden cursor-pointer">
                    <img class="w-full group-hover:scale-110" src={props.image} alt="blog-img"/>
                </div>
            </div>
            <div class="mt-4">
                <a class="text-xl cursor-pointer group-hover:text-blue-500" href={props.link}>{props.title}</a>
            </div>
        </div>
    );
};

export default BlogItem;