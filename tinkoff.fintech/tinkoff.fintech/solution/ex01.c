/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ex01.c                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: apearl <apearl@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/01/27 18:52:22 by apearl            #+#    #+#             */
/*   Updated: 2020/01/27 18:59:37 by apearl           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <math.h>
#include <stdio.h>
#include <stdlib.h>

char	*ft_strdup(const char *s1)
{
	int		len;
	int		i;
	char	*ret;

	len = 0;
	while (s1[len] != '\0')
		len++;
	ret = (char*)malloc(sizeof(char) * (len + 1));
	if (!ret)
		return (NULL);
	i = 0;
	while (i <= len)
	{
		ret[i] = s1[i];
		i++;
	}
	return (ret);
}

static size_t	ft_nbrlen(int n)
{
	size_t	ret;

	ret = 0;
	while (n > 0)
	{
		n = n / 10;
		ret++;
	}
	return (ret);
}

static char		*ft_except(int n)
{
	if (n == -2147483648)
		return (ft_strdup("-2147483648"));
	else if (n == -0)
		return (ft_strdup("0"));
	else if (n == 0)
		return (ft_strdup("0"));
	return (NULL);
}

static size_t	ft_sign(int n)
{
	if (n < 0)
		return (1);
	return (0);
}

char			*ft_itoa(int n)
{
	char	*ret;
	size_t	len;
	size_t	sign;

	if (n == -2147483648 || n == -0 || n == 0)
		return (ft_except(n));
	sign = ft_sign(n);
	if (sign == 1)
		n = -1 * n;
	len = sign + ft_nbrlen(n);
	if (!(ret = (char *)malloc(sizeof(char) * (len + 1))))
		return (NULL);
	ret[len] = '\0';
	while (--len > 0)
	{
		ret[len] = n % 10 + '0';
		n = n / 10;
	}
	if (sign == 1)
		ret[0] = '-';
	else
		ret[0] = n % 10 + '0';
	return (ret);
}

char*   ft_days_to_month(int x)
{
    int result;

    if (x < 1 || x > 12) // здравый смысл
		return ("oh my god danila are you crazy");
    result = 28 + (int)(x + floor(x / 8)) % 2 + 2 % x + 2 * floor(1/x);
	// if (x < 1 || abs(x) > pow(10, 3)) // техническое задание
	return (ft_itoa(result));
}

int     main(void)
{
    printf("%s\n", ft_days_to_month(-1));
    return (0);
}