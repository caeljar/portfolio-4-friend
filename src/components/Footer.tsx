import React from 'react';
import { Link } from 'react-scroll';

const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-secondary text-primary py-8 border-t border-primary/10">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">

                <p className="text-sm font-medium tracking-widest uppercase mb-4 md:mb-0 opacity-70">
                    © {new Date().getFullYear()} All Rights Reserved.
                </p>

                <Link
                    to="hero"
                    smooth={true}
                    duration={800}
                    className="text-sm font-bold tracking-widest uppercase cursor-pointer hover:underline underline-offset-4"
                >
                    Back to Top ↑
                </Link>

            </div>
        </footer>
    );
};

export default Footer;
