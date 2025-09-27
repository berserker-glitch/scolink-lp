'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'motion/react';
import {
  FacebookIcon,
  GraduationCap,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  Mail
} from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const FooterLinksComponent = () => {
	const { t } = useTranslation();

	const footerLinks: FooterSection[] = [
		{
			label: t('footer.sections.product'),
			links: [
				{ title: t('footer.links.features'), href: '/features' },
				{ title: t('footer.links.pricing'), href: '/pricing' },
				{ title: t('footer.links.howtouse'), href: '/how-to-use' },
			],
		},
		{
			label: t('footer.sections.company'),
			links: [
				{ title: t('footer.links.privacy'), href: '/privacy' },
				{ title: t('footer.links.terms'), href: '/terms' },
				{ title: t('footer.links.refund'), href: '/refund' },
			],
		},
		{
			label: t('footer.sections.contact'),
			links: [
				{ title: 'contact.scolink@gmail.com', href: 'mailto:contact.scolink@gmail.com', icon: Mail },
			],
		},
	];

	return (
		<>
			{footerLinks.map((section, index) => (
				<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
					<div className="mb-10 md:mb-0">
						<h3 className="text-sm font-semibold text-foreground mb-4">{section.label}</h3>
						<ul className="text-muted-foreground space-y-3 text-sm">
							{section.links.map((link) => (
								<li key={link.title}>
									<a
										href={link.href}
										className="hover:text-primary inline-flex items-center transition-all duration-300 hover:translate-x-1"
									>
										{link.icon && <link.icon className="me-2 size-4" />}
										{link.title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</AnimatedContainer>
			))}
		</>
	);
};

export function Footer() {
	const { t } = useTranslation();

	const socialLinks: FooterLink[] = [
		{ title: t('footer.social.facebook'), href: '#', icon: FacebookIcon },
		{ title: t('footer.social.instagram'), href: '#', icon: InstagramIcon },
		{ title: t('footer.social.youtube'), href: '#', icon: YoutubeIcon },
		{ title: t('footer.social.linkedin'), href: '#', icon: LinkedinIcon },
	];

	return (
		<footer className="md:rounded-t-6xl relative w-full flex flex-col items-center justify-center rounded-t-4xl border-t bg-gradient-to-b from-muted/30 to-muted/50 px-6 py-12 lg:py-16">
			<div className="bg-primary/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full max-w-7xl mx-auto gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<div className="flex items-center gap-2">
						<div className="bg-gradient-primary rounded-lg p-2">
							<GraduationCap className="h-6 w-6 text-white" />
						</div>
						<span className="text-xl font-bold text-foreground">Scolink</span>
					</div>
					<p className="text-muted-foreground mt-8 text-sm md:mt-0 max-w-sm">
						{t('footer.description')}
					</p>
					<div className="flex gap-4 mt-6">
						{socialLinks.map((link) => (
							<a
								key={link.title}
								href={link.href}
								className="text-muted-foreground hover:text-primary transition-colors duration-300"
								aria-label={link.title}
							>
								{link.icon && <link.icon className="h-5 w-5" />}
							</a>
						))}
					</div>
					<p className="text-muted-foreground text-sm">
						© {new Date().getFullYear()} Scolink. {t('footer.copyright')}
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					<FooterLinksComponent />
				</div>
			</div>

			{/* Powered by section - centered in the middle */}
			<div className="flex items-center justify-center gap-2 mt-8">
				<span className="text-xs text-muted-foreground/70">Powered by</span>
				{/* Hetzner Icon */}
				<a
					href="https://www.hetzner.com"
					target="_blank"
					rel="noopener noreferrer"
					className="hover:opacity-80 transition-opacity duration-300"
					aria-label="Hetzner"
				>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Logo_Hetzner.svg"
						alt="Hetzner"
						className="h-4 w-auto filter grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
					/>
				</a>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
